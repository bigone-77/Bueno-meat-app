package shop.buenoMeat.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import shop.buenoMeat.domain.CategoryName;
import shop.buenoMeat.domain.Item;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class ItemRepository {

    private final EntityManager em;

    public Item findOne(Long id){return em.find(Item.class,id);} // 아이디로 상품 조회

    public List<Item> findAll() {
        return em.createQuery("select i from Item i", Item.class)
                .getResultList();
    } // 상품 전체 조회

    public List<Item> findAllByCategory(CategoryName categoryName) {
        String jpql = "select i from Item i join i.category c where c.categoryName = :categoryName";
        return em.createQuery(jpql, Item.class)
                .setParameter("categoryName", categoryName)
                .getResultList();
    } // 카테고리명으로 상품 조회
}
