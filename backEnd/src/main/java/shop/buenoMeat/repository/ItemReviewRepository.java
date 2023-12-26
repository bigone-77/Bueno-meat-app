package shop.buenoMeat.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import shop.buenoMeat.domain.ItemReview;
import shop.buenoMeat.domain.Member;
import shop.buenoMeat.domain.WishList;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class ItemReviewRepository {

    private final EntityManager em;

    public void save(ItemReview itemReview) {em.persist(itemReview);} //회원 저장

    public ItemReview findByReviewId(Long id){ return em.find(ItemReview.class,id); }

    public List<ItemReview> findAllByMemberId(Long memberId) {
        return em.createQuery("select i from ItemReview i where i.memberId = :memberId", ItemReview.class)
                .setParameter("memberId", memberId).getResultList();
    }

    public List<ItemReview> findAllByItemId(Long ItemId) {
        return em.createQuery("select i from ItemReview i where i.ItemId = :ItemId", ItemReview.class)
                .setParameter("ItemId", ItemId).getResultList();
    }

    public void delete(ItemReview itemReview){em.remove(itemReview);}

    public void flush() {
        em.flush();
    }

}
