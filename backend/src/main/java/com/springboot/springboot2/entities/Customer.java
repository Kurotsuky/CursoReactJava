package com.springboot.springboot2.entities;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "customers")
@ToString
@EqualsAndHashCode
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter
    private Long id;

    @Getter @Setter
    private String firstname;

    @Getter @Setter
    private String lastname;

    @Getter @Setter
    private String email;

    @Getter @Setter
    private String phone;

    @Getter @Setter
    private String address;
}
