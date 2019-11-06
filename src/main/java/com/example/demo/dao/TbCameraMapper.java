package com.example.demo.dao;


import java.util.List;

import com.example.demo.bean.TbCamera;
import com.example.demo.bean.TbCameraExample;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;


@Mapper
public interface TbCameraMapper {
    int countByExample(TbCameraExample example);

    int deleteByExample(TbCameraExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TbCamera record);

    int insertSelective(TbCamera record);

    List<TbCamera> selectByExample(TbCameraExample example);

    TbCamera selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TbCamera record, @Param("example") TbCameraExample example);

    int updateByExample(@Param("record") TbCamera record, @Param("example") TbCameraExample example);

    int updateByPrimaryKeySelective(TbCamera record);

    int updateByPrimaryKey(TbCamera record);
}