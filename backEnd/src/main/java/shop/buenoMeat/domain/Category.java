package shop.buenoMeat.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Category {

    @Id
    @GeneratedValue
    @Column(name = "category_id")
    private Long id;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Item> items = new ArrayList<>();

    // 이 부분은 두 브랜치에서 충돌이 발생한 부분입니다.
    // 아래 코드는 categoryName 필드를 열거형(EnumType.STRING)으로 사용하도록 수정했습니다.
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CategoryName categoryName; // PIG, COW, CHICKEN, SHEEP, FISH, MEAL_KIT
}

