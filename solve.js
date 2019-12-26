
// Question Link > Hacker rank question - https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
    return n > 1 ? ar.reduce((total, value, index, array) => {
        let counterKeyPair = {};
        if (index === 1) {
            if (total === value) {
                counterKeyPair[total] = 2;
            } else {
                counterKeyPair[total] = 1;
                counterKeyPair[value] = 1;
            }
            return counterKeyPair
        };
        if (index > 1 && index < array.length - 1) {
            counterKeyPair = total;
            counterKeyPair[value] = counterKeyPair[value] ? counterKeyPair[value] + 1 : 1;
            return counterKeyPair
        }
        if (index === array.length - 1) {
            let count = 0;
            counterKeyPair = total;
            counterKeyPair[value] = counterKeyPair[value] ? counterKeyPair[value] + 1 : 1;
            for (let key in counterKeyPair) {
                count = count + Math.floor(counterKeyPair[key] / 2);
            }
            return count
        }
    }) : 0;
}

// Question link > https://www.hackerrank.com/challenges/js10-function/problem

function factorial(input) {
   let output = 1;
   let pointer = input;
   while(pointer > 0) {
       output *= pointer;
       pointer -= 1;
   }
   return output;
}

// Question link > https://www.hackerrank.com/challenges/arrays-ds/problem

function reverseArray(a) {
    let newArray = [];
    a.map((v, i)=> {
        newArray[a.length - 1 - i] = v
    });
    return a.length > 1 ? newArray : [];
}

// Question link > https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem

function printLinkedList(head) {
    if (head.data) {
        console.log(head.data);
    }
    if (head.next) {
        printLinkedList(head.next);
    }
}

// Question link > https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem

function insertNodeAtTail(head, data) {
    if (!head) {
        head = {
            data: data,
            next: null
        }
    } else {
        if (head.next) {
           insertNodeAtTail(head.next, data)
        } else {
           head.next = {
                data: data,
                next: null                
            }
            return head
        }
    }
    return head
}

// Question link > https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function insertNodeAtHead(head, data) {
  if (!head) {
      head = {
          data: data,
          next: null
      }
      return head
  } 
  const headBackup = Object.assign({}, head);
  head = {
      data: data,
      next: headBackup
  }
  return head
}

// Question link > https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem

function insertNodeAtPosition(head, data, position) {
    var newNode = {
        data: data,
        next: null
    };
    var pointer = 0;
    var refNode, prevNode;

    if (!head) {
        head = {
            data: data,
            next: newNode
        };
        return head
    } else {
        if (head.next) {
            refNode = head;
            while (pointer < position) {
                pointer++;
                prevNode = refNode;
                refNode = refNode.next;
            };
            prevNode.next = newNode;
            newNode.next = refNode;
            return head
        } else {
            head.next = {
                data: data,
                next: newNode
            }
        }
    }
    return head
}

// Question link > https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem

function deleteNode(head, position) {
    var pointer = 0;
    var refNode, prevNode;

    if (position === 0) {
        head = head.next;
        return head
    } else {
        refNode = head;
        while (pointer < position) {
            pointer++;
            prevNode = refNode;
            refNode = refNode.next;
        };
        prevNode.next = refNode.next;
    }
    return head
}


// Question link > Coming soon...
