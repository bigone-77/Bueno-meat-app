package shop.buenoMeat.dto;

import lombok.Getter;
import lombok.Setter;
import shop.buenoMeat.domain.Member;

@Getter @Setter
public class MemberJoinDto {
    private String username;
    private String pw;
    private String email;
    private String phone;
    private String nickname;
    private String address;
    private String detailAddress;

    public Member toEntity() {
        Member member = Member.createMember(this);
        member.changeUserName(username);
        member.changePw(pw);
        member.changeEmail(email);
        member.changePhone(phone);
        member.changeNickname(nickname);
        member.changeAddress(address);
        member.changeDetailAddress(detailAddress);
        return member;
    }
}
