// THE DELEGATION PATTERN

// Why? 
// An object wants to know of something happening elsewhere

// How?
// 1. Create a protocol
// 2. Create a "sender"
// 3. Create a "receiver" that "conforms" to the protocol

// STEP 1: Create your protocol

protocol MyKaleDelegate: AnyObject {
  func event1(mySenderView: MySenderView) {}
  func event2(mySenderView: MySenderView) {}
}

// STEP 2: Set up your "sender"

class MySenderView: UIView {
    // create a weak reference later set by the "receiver"
    weak var delegate: MyKaleDelegate?

    func anyFunction() {
        // its best practice to send `self` to the receiver
        delegate?.event1(mySenderView: self)
    }
}

// STEP 3: The "listener" conforms to the delegate

class MyViewController: UIViewController: MyKaleDelegate {
    override func viewDidLoad() {
        // creates an instance of the "sender"
        let myView = MyView()

        // sets the "sender" delegate to itself
        myView.delegate = self
    }

    func event1() {
        // this function must be implemented to be availale for the "sender"
    }

    func event2() {
        // this function must be implemented to be availale for the "sender"
    }
}
