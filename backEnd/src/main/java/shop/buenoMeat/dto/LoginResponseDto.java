package shop.buenoMeat.dto;

import lombok.Getter;
import lombok.Setter;
import shop.buenoMeat.domain.Member;

@Getter
@Setter
public class LoginResponseDto {
    private String msg;
    private String nickname;

    public LoginResponseDto(String msg, String nickname) {
        this.msg = msg;
        this.nickname = nickname;
    }
}
