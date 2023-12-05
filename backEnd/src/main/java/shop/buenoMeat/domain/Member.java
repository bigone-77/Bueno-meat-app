package shop.buenoMeat.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import shop.buenoMeat.dto.MemberDto;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {

    @Id
    @GeneratedValue
    @Column(name = "member_id", nullable = false)
    private Long id; //pk

    @Column(name = "name", length = 30)
    private String username;

    @Column(name = "password") // 소셜로그인 추가 ( null 값도 허용 )
    private String pw;

    @Column(unique = true)
    private String email;

    @Column(name = "phoneNumber", length = 11)
    private String phone;

    @Column(length = 16, unique = true)
    private String nickname;

    private String address;

    private String detailAddress;
    @Enumerated(EnumType.STRING)
    @ColumnDefault("'NORMAL'")
    private MemberRole role; //ADMIN, NORMAL  ( default = Normal )

    private int point;

    @OneToMany(mappedBy = "member")
    private List<Order> orders = new ArrayList<>();


    public static Member createMember(MemberDto memberDto) {
        Member member = new Member();
        member.username = memberDto.getUsername();
        member.pw = memberDto.getPw();
        member.email = memberDto.getEmail();
        member.phone = memberDto.getPhone();
        member.nickname = memberDto.getNickname();
        member.address = memberDto.getAddress();
        member.detailAddress = memberDto.getDetailAddress();
        member.role = MemberRole.NORMAL;
        member.point = 1000;
        return member;
    }

    public void changeUserName(String username) {
        this.username = username;
    }

    public void changePw(String pw) {
        this.pw = pw;
    }

    public void changeEmail(String email) {
        this.email = email;
    }

    public void changePhone(String phone) {
        this.phone = phone;
    }

    public void changeNickname(String nickname) {
        this.nickname = nickname;
    }

    public void changeAddress(String address){this.address = address;}

    public void changeDetailAddress(String detailAddress){this.detailAddress = detailAddress;}

    public void changeMemberRole(MemberRole memberRole) {
        this.role = memberRole;
    }
}
