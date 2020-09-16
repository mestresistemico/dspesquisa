package com.mestresistemico.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mestresistemico.dspesquisa.entities.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long> {

}
