package com.mestresistemico.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mestresistemico.dspesquisa.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
