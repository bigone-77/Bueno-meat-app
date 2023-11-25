package shop.buenoMeat.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
public class UpdateDto {

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class updatePwDto {
        private String pw;
        private String newPw;
    }
}
