package com.zaknafein99.ecommerce.dao;

import com.zaknafein99.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {



}
