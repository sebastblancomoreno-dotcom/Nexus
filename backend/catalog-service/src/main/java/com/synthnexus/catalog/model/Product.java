package com.synthnexus.catalog.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import java.math.BigDecimal;

import java.util.List;

@Entity
@Table(name = "t_products")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String brand;

    @Enumerated(EnumType.STRING)
    private Category category;

    @Column(name = "demo_url")
    private String demoUrl;

    private String description;

    @Column(name = "image_url")
    private String imageUrl;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "t_product_images", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "image_url")
    @JsonProperty("extraImageUrls")
    @Fetch(FetchMode.JOIN)
    private List<String> extraImageUrls;

    private String name;
    private BigDecimal price;
    private Integer stock;

    public enum Category {
        SYNTHESIZER, DRUM_MACHINE, EURORACK, CONTROLLER
    }
}
