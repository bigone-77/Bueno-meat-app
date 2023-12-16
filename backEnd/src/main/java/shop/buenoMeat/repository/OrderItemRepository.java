package shop.buenoMeat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import shop.buenoMeat.domain.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
