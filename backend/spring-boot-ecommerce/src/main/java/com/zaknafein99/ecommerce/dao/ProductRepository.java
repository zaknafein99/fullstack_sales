package com.zaknafein99.ecommerce.dao;

import com.zaknafein99.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin()
public interface ProductRepository extends JpaRepository<Product, Long> {



}
