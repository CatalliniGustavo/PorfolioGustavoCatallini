package com.catallinigustavo.pgc.Repository;

import com.catallinigustavo.pgc.Entity.Experiencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IExperienciaRepository extends JpaRepository<Experiencia, Long>{
    
}
