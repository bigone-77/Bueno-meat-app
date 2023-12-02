package shop.buenoMeat.dto;

import lombok.Getter;
import lombok.Setter;
<<<<<<< HEAD
=======
import shop.buenoMeat.domain.Item;
>>>>>>> main
import shop.buenoMeat.domain.Member;

@Setter
@Getter
public class ConvertToDto {

<<<<<<< HEAD
    public MemberDto convertToMemberDto(Member member) {
=======
    public static MemberDto convertToMemberDto(Member member) {
>>>>>>> main
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
<<<<<<< HEAD
=======

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
>>>>>>> main
}
