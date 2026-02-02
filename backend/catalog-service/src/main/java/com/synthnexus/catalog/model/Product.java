package com.synthnexus.catalog.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

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

    private String name;
    private BigDecimal price;
    private Integer stock;

    public enum Category {
        SYNTHESIZER, DRUM_MACHINE, EURORACK, CONTROLLER
    }
}
