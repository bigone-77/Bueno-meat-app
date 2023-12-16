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
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class orderResponseDto {
        private String msg;
        private Long id;
    }
}
