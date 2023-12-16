package shop.buenoMeat.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
public class OrderDto {

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class orderPageResponseDto {
        private List<ItemDto.getCartDto> orderItemList;
        private orderMemberInfo orderMemberInfo;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class orderMemberInfo {
        private String address;
        private String detailAddress;
        private String name;
        private String phone;
        private int point;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class orderRequestDto {
        private String memo;
        private Map<Long,Integer> ItemAndCount;
        private String address;
        private String detailAddress;
        private String recipient;
        private String email;
        private String phone;
        private int usePoint;
        private int totalPrice;
        private Long orderNum;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class orderResponseDto {
        private String msg;
        private Long id;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class orderDataDto {
        private String orderDate;
        private Long orderNum;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class orderItemDto {
        private Long itemId;
        private String itemName;
        private String image;
        private String itemOption;
        private int price;
        private int itemCount;
    }

   /* @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class getOrdersDto {

    }*/


}
