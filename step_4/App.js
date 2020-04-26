import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default class App extends React.Component {

    constructor(covidata){
    super(covidata);
    this.state = {
      TotalConfirmed:'',
      TotalDeaths: '',
      TotalRecovered: '',
      CurrentDate: '',
    };
  } 

  componentDidMount() {
    // First grab all the stuff we want from the summary API page
    fetch('https://api.covid19api.com/summary', {method: 'GET'})
      .then((response) => response.json())
      .then(json => {
        this.setState({
          TotalConfirmed: json['Global']['TotalConfirmed'],
          TotalDeaths: json['Global']['TotalDeaths'],
          TotalRecovered: json['Global']['TotalRecovered'],
          CurrentDate: json['Date']
        },
        function(){}
      );
      console.log(this.state.jsondata);
      })

  }

  render(){
    return(
      // Now we want to display our data with the different formatting 
      <View style={style.container}>
        <Text style = {style.headline}> COVID19 Cases Around The World</Text>
        <Text style = {style.text}> Date: {this.state.CurrentDate}</Text>
        <Text style = {style.text}> Total Confirmed Cases:    {this.state.TotalConfirmed}</Text>
        <Text style = {style.text}> Total Deaths:                     {this.state.TotalDeaths}</Text>
        <Text style = {style.text}> Total Recovered Cases:    {this.state.TotalRecovered}</Text>
        <Text style = {style.bottomcovering}>    </Text>

        </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor:'#F7DB4F',    
  },
  headline:{
    marginTop: 75,
    marginBottom: 50,
    fontSize: 25,
    textAlign: "center",
  },

  text:{
    marginTop: 25,
    marginBottom: 20,
    marginRight: 25,
    marginLeft: 25,
    fontSize: 23,
    textAlign: "center",
    backgroundColor: '#2F9599',
  },
  bottomcovering:{
    marginBottom: 200,
  }
})