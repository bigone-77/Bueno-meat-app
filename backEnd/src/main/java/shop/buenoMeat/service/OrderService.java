package shop.buenoMeat.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import shop.buenoMeat.domain.*;
import shop.buenoMeat.dto.ConvertToDto;
import shop.buenoMeat.dto.ItemDto;
import shop.buenoMeat.dto.OrderDto;
import shop.buenoMeat.repository.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class OrderService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final MemberRepository memberRepository;
    private final ItemRepository itemRepository;
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;

    //-- 주문 페이지 불러오기 --//
    public OrderDto.orderPageResponseDto getOrderPage(Long memberId){
        Cart findCart = cartRepository.findByMemberId(memberId);
        List<CartItem> findAllCartItem = cartItemRepository.findAllByCartId(findCart.getId());
        Member findMember = memberRepository.findOne(memberId);
        OrderDto.orderMemberInfo orderMemberInfo = new OrderDto.orderMemberInfo(findMember.getAddress(), findMember.getDetailAddress(),
                findMember.getUsername(), findMember.getPhone(), findMember.getPoint());
        List<ItemDto.getCartDto> orderItemList = findAllCartItem.stream()
                .map(ConvertToDto::convertToGetCartDto)
                .collect(Collectors.toList());
        return new OrderDto.orderPageResponseDto(orderItemList, orderMemberInfo);
    }


    //-- 주문하기 --//
    @Transactional
    public Long order(Long memberId, OrderDto.orderRequestDto orderRequestDto) {
        Member findMember = memberRepository.findOne(memberId);
        findMember.usePoint(orderRequestDto.getUsePoint()); // 포인트 사용
        Map<Long, Integer> itemAndCount = orderRequestDto.getItemAndCount();
        List<OrderItem> orderItems = new ArrayList<>();
        for (Long itemId : itemAndCount.keySet()) {
            Item findItem = itemRepository.findOne(itemId);
            OrderItem orderItem = OrderItem.createOrderItem(findItem, itemAndCount.get(itemId));
            orderItemRepository.save(orderItem);
            orderItems.add(orderItem);
        }
        Order order = Order.createOrder(findMember, orderRequestDto.getRecipient(), orderRequestDto.getPhone(),
                orderRequestDto.getEmail(), orderRequestDto.getAddress(), orderRequestDto.getDetailAddress(),
                orderRequestDto.getMemo(), orderRequestDto.getTotalPrice(), orderItems);
        orderRepository.save(order);
        for (OrderItem orderItem : orderItems) {
            orderItem.setOrder(order);
        }
        return order.getId();
    }

}
