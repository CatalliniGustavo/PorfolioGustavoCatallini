package com.catallinigustavo.pgc.Repository;

import com.catallinigustavo.pgc.Entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario, Long> {
      Usuario findByNombre(String nombre);
}
