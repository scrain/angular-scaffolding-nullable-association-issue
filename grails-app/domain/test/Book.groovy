package test


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Book {
    String title
    Publisher publisher

    static constraints = {
        publisher nullable: true
    }
}