package shop.buenoMeat.dto;

import lombok.Getter;
import lombok.Setter;
import shop.buenoMeat.domain.*;

@Setter
@Getter
public class ConvertToDto {

    public static MemberDto convertToMemberDto(Member member) {
        MemberDto memberDto = new MemberDto();
        memberDto.setPw(member.getPw());
        memberDto.setAddress(member.getAddress());
        memberDto.setPhone(member.getPhone());
        memberDto.setEmail(member.getEmail());
        memberDto.setNickname(member.getNickname());
        memberDto.setDetailAddress(member.getDetailAddress());
        memberDto.setUsername(member.getUsername());
        return memberDto;
    }

    public static ItemDto.itemHotAndCategoryDto convertToItemCategoryDto(Item item) {
        return new ItemDto.itemHotAndCategoryDto(
                item.getId(),
                item.getCategory().getCategoryName(),
                item.getName(),
                item.getInfo(),
                item.getImage(),
                item.getPrice(),
                item.getWeight(),
                item.getWeightUnit()
        );
    }

    public static ItemDto.mypageWishListDto convertToMyPageWishListDto(Item item) {
        return new ItemDto.mypageWishListDto(
                item.getId(),
                item.getName(),
                item.getInfo(),
                item.getImage(),
                item.getPrice(),
                item.getWeight(),
                item.getWeightUnit()
        );
    }

    public static ItemDto.searchItemByNameDto convertToSearchItemByNameDto(Item item) {
        return new ItemDto.searchItemByNameDto(
                item.getId(),
                item.getImage(),
                item.getPrice(),
                item.getName(),
                item.getWeight(),
                item.getWeightUnit()
        );
    }

    public static ItemDto.getCartDto convertToGetCartDto(CartItem cartItem) {
        return new ItemDto.getCartDto(
                cartItem.getItem().getId(),
                cartItem.getItem().getName(),
                cartItem.getItemCount(),
                cartItem.getTotalPrice(),
                cartItem.getItemOption(),
                cartItem.getItem().getStock(),
                cartItem.getItem().getImage()
        );
    }

    public static OrderDto.orderHistoryDto convertToGetOrderHistoryDto(OrderItem orderItem) {

        return new OrderDto.orderHistoryDto(
                orderItem.getItem().getId(),
                orderItem.getItem().getName(),
                orderItem.getCount(),
                orderItem.getOrder().getTotalPrice(),
                orderItem.getItemOption(),
                orderItem.getItem().getImage(),
                orderItem.getOrder().getOrderNum(),
                orderItem.getOrder().getOrderDate()
        );
    }

}
