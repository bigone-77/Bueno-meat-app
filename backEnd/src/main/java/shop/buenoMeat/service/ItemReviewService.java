package shop.buenoMeat.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import shop.buenoMeat.domain.Item;
import shop.buenoMeat.domain.ItemReview;
import shop.buenoMeat.domain.Member;
import shop.buenoMeat.dto.ConvertToDto;
import shop.buenoMeat.dto.ItemDto;
import shop.buenoMeat.repository.ItemRepository;
import shop.buenoMeat.repository.MemberRepository;
import shop.buenoMeat.repository.ItemReviewRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ItemReviewService {

    private final ItemRepository itemRepository;
    private final MemberRepository memberRepository;
    private final ItemReviewRepository itemReviewRepository;

    //-- 리뷰(마이페이지) 불러오기 --//
    public ItemDto.getReviewFormPage getReviewFormPage(Long memberId) {
        Member findMember = memberRepository.findOne(memberId);
        List<ItemReview> findAllReviews = itemReviewRepository.findAllByMemberId(memberId);
        int totalRecommend = 0;
        for (ItemReview findReview : findAllReviews) {
            totalRecommend += findReview.getRecommend();
        }
        ItemDto.reviewUserInfo reviewUserInfo = new ItemDto.reviewUserInfo(findMember.getUsername(), totalRecommend);
        List<ItemDto.reviewItemInfo> reviewItemInfos = findAllReviews.stream()
                .map(ConvertToDto::convertToReviewItemInfo)
                .collect(Collectors.toList());
        ItemDto.getReviewFormPage getReviewFormPage = new ItemDto.getReviewFormPage(reviewItemInfos, reviewUserInfo);
        return getReviewFormPage;
    }

    //-- 리뷰 작성하기 --//
    public void enrollReview(Long memberId, Long itemId, ItemDto.enrollReviewDto enrollReviewDto) {
        Item findItem = itemRepository.findOne(itemId);
        Member findMember = memberRepository.findOne(memberId);
        ItemReview itemReview = ItemReview.createReview(findItem, findMember, enrollReviewDto.getComment(),
                enrollReviewDto.getStarRating(), enrollReviewDto.getReviewImage());
        itemReviewRepository.save(itemReview);
    }
}
