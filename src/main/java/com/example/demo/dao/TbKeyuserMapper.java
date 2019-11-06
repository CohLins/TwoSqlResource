package com.example.demo.dao;

import com.example.demo.bean.TbKeyuser;
import com.example.demo.bean.TbKeyuserExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TbKeyuserMapper {
    int countByExample(TbKeyuserExample example);

    int deleteByExample(TbKeyuserExample example);

    int deleteByPrimaryKey(String userId);

    int insert(TbKeyuser record);

    int insertSelective(TbKeyuser record);

    List<TbKeyuser> selectByExample(TbKeyuserExample example);

    TbKeyuser selectByPrimaryKey(String userId);

    int updateByExampleSelective(@Param("record") TbKeyuser record, @Param("example") TbKeyuserExample example);

    int updateByExample(@Param("record") TbKeyuser record, @Param("example") TbKeyuserExample example);

    int updateByPrimaryKeySelective(TbKeyuser record);

    int updateByPrimaryKey(TbKeyuser record);
}