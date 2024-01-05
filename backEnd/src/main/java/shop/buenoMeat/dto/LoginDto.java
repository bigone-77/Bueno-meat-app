package shop.buenoMeat.dto;

import lombok.*;
import shop.buenoMeat.domain.WishList;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class LoginDto {

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class loginRequestDto {
        private String email;
        private String pw;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class loginResponseDto {
        private String msg;
        private String nickname;
        private Long id;
        private List<WishList> wishListItems;
    }
}
