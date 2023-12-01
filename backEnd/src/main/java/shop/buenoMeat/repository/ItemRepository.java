package shop.buenoMeat.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import shop.buenoMeat.domain.CategoryName;
import shop.buenoMeat.domain.Item;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.validation.constraints.Null;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class ItemRepository {

    private final EntityManager em;

    public Item findOne(Long id){return em.find(Item.class,id);}

    public List<Item> findAll() {
        return em.createQuery("select i from Item i", Item.class)
                .getResultList();
    }

    public List<Item> findAllByCategory(CategoryName categoryName) {
        String jpql = "select i from Item i join i.category c where c.categoryName = :categoryName";
        return em.createQuery(jpql, Item.class)
                .setParameter("categoryName", categoryName)
                .getResultList();
    }
}
