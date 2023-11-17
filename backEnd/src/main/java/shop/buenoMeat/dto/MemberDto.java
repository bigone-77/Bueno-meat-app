package shop.buenoMeat.dto;

import lombok.Getter;
import lombok.Setter;
import shop.buenoMeat.domain.Address;

@Getter @Setter
public class MemberDto {

    private String username;
    private String pw;
    private String email;
    private String phone;
    private String nickname;
    private Address address;

    public MemberDto(String username, String pw, String email, String phone, String nickname, Address address) {
        this.username = username;
        this.pw = pw;
        this.email = email;
        this.phone = phone;
        this.nickname = nickname;
        this.address = address;
    }
}
