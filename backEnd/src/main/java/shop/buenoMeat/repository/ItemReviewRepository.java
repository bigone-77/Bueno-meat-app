package shop.buenoMeat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import shop.buenoMeat.domain.ItemReview;

import java.util.List;

public interface ItemReviewRepository extends JpaRepository<ItemReview, Long> {

    List<ItemReview> findAllByMemberId(Long memberId);

}
