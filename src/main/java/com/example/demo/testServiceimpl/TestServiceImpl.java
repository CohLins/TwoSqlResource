package com.example.demo.testServiceimpl;

import com.example.demo.TestService.TestService;
import com.example.demo.firstMapper.DemoMapper;
import com.example.demo.firstModel.Demo;
import com.example.demo.firstModel.DemoExample;
import com.example.demo.secondMapper.TbUserMapper;
import com.example.demo.secondModel.TbUser;
import com.example.demo.secondModel.TbUserExample;
import com.example.demo.utils.E3Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestServiceImpl implements TestService {
    @Autowired
    private DemoMapper demoMapper;
    @Autowired
    private TbUserMapper tbUserMapper;
    @Override
    public E3Result firstDao() {
        DemoExample example = new DemoExample();
        List<Demo> demos = demoMapper.selectByExample(example);
        return E3Result.ok(demos);
    }

    @Override
    public E3Result secondDao() {
        TbUserExample example = new TbUserExample();
        List<TbUser> tbUsers = tbUserMapper.selectByExample(example);
        return E3Result.ok(tbUsers);
    }
}
