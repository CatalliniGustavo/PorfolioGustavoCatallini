package com.catallinigustavo.pgc.Service;

import com.catallinigustavo.pgc.Entity.Usuario;
import com.catallinigustavo.pgc.Interface.IUsuarioService;
import com.catallinigustavo.pgc.Repository.IUsuarioRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpUsuarioService implements IUsuarioService{
    @Autowired IUsuarioRepository iusuarioRepository;

    @Override
    public Usuario getUsuario(String nombre) {
        Usuario login = iusuarioRepository.findByNombre(nombre);
        return login;
    }

    @Override
    public void saveUsuario(Usuario usuario) {
        iusuarioRepository.save(usuario);
    }

    @Override
    public void deletUsuario(Long id) {
        iusuarioRepository.deleteById(id);
    }

    @Override
    public Usuario findUsuario(Long id) {
        Usuario usuario = iusuarioRepository.findById(id).orElse(null);
        return usuario;
    }
}
