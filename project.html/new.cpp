#include<iostream>
using namespace std;
class node{
    public:
    int data;
    node* next;
    node* prev;

    node(int val){
        data=val;
        next=prev=NULL;
    }
};
class doublylist{
    node* head;
    node* tail;
    public:
    doublylist(){
        head=tail=NULL;
    }
};
int main(){
    doublylist ll;
    ll node(2);
    node(3);
}