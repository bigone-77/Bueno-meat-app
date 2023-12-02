package shop.buenoMeat.dto;

import lombok.Getter;
import lombok.Setter;
import shop.buenoMeat.domain.Item;
import shop.buenoMeat.domain.Member;

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
}
