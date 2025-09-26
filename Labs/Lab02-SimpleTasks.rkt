#lang racket/base

(define (greet name) (string-append "Привет, " name "!"))
(greet "Маша")

(define (add-two a b) (+ a b))
(add-two 3 5)

(define (is-even n) (even? n))
(is-even 4)
(is-even 7)

(define (max-two a b) (if (> a b) a b))
(max-two 10 7)

(define (sum-to-n n) (if (> n 1) (+ (sum-to-n (- n 1)) n) 1))
(sum-to-n 5)

(define (list-length lst) (if (null? lst) 0 (+ 1 (list-length (cdr lst)))))
(list-length '(1 2 3 4))

(define (sum-list lst) (if (null? lst) 0 (+ (car lst) (sum-list (cdr lst)))))
(sum-list '(1 2 3 4))

(define (filter-even lst) (if (null? lst) '() (if (even? (car lst)) (cons (car lst) (filter-even (cdr lst))) (filter-even (cdr lst)))))
(filter-even '(1 2 3 4 5 6))

(define (double-list lst) (if (null? lst) '() (cons (* 2 (car lst)) (double-list (cdr lst)))))
(double-list '(1 2 3 4))
