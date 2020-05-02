package com.brabochamp.afstuderenlight.models

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import javax.persistence.*

@Entity
@Table(name = "product")
class Product (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    val productId: Long = 0,

    @Column(name = "name")
    val name: String,

    @Column(name = "description")
    val description: String,

    @Column(name = "price")
    val price: Int,

    @JsonIgnoreProperties(value = ["product"])
    @OneToMany(mappedBy = "product")
    var orderLines: MutableList<OrderLine> = mutableListOf()
)