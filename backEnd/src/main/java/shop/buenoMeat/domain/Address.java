package shop.buenoMeat.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;

@Embeddable
@Getter
public class Address {

    private String zipcode;
    private String address;
    private String detailAddress;

    public Address(String zipcode, String address, String detailAddress) {
        this.zipcode = zipcode;
        this.address = address;
        this.detailAddress = detailAddress;
    }
}
