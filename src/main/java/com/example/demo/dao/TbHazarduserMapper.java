package com.example.demo.dao;

import com.example.demo.bean.TbHazarduser;
import com.example.demo.bean.TbHazarduserExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TbHazarduserMapper {
    int countByExample(TbHazarduserExample example);

    int deleteByExample(TbHazarduserExample example);

    int deleteByPrimaryKey(String userId);

    int insert(TbHazarduser record);

    int insertSelective(TbHazarduser record);

    List<TbHazarduser> selectByExample(TbHazarduserExample example);

    TbHazarduser selectByPrimaryKey(String userId);

    int updateByExampleSelective(@Param("record") TbHazarduser record, @Param("example") TbHazarduserExample example);

    int updateByExample(@Param("record") TbHazarduser record, @Param("example") TbHazarduserExample example);

    int updateByPrimaryKeySelective(TbHazarduser record);

    int updateByPrimaryKey(TbHazarduser record);
}