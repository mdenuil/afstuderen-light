package com.brabochamp.afstuderenlight.models

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import javax.persistence.*

@Entity
@Table(name = "order_line")
class OrderLine (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_line_id")
    val orderLineId: Long = 0,

    @Column(name = "amount")
    val amount: Int,

    @ManyToOne
    @JoinColumn(name = "order_id")
    val order: Order,

    @ManyToOne
    @JoinColumn(name = "product_id")
    @JsonIgnoreProperties("orderLines")
    val product: Product
)