package com.example.demo.controller;

import com.example.demo.TestService.TestService;
import com.example.demo.utils.E3Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestServiceController {
    @Autowired
    private TestService testService;
    //  查询全部
    @ResponseBody
    @RequestMapping(value = "/first")
    public E3Result selectAll(){
        return testService.firstDao();
    }

    @ResponseBody
    @RequestMapping(value = "/second")
    public E3Result select(){
        return testService.secondDao();
    }
}
