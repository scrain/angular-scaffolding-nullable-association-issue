package test


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Publisher {
    String name
}