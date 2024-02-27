// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Supplychain{

    enum ShipmentStatus {PENDING, IN_TRANSIT, DELIVERED}
    enum PaymentStatus {PAID,UNPAID,TOKEN_RECEIVED}
    enum StakeHolder {MANUFACTURER,WHOLESALER,RETAILER}

    struct Shipment{
        string sender_name;
        string receiver_name;
        address sender;
        address receiver;
        uint256 index;
        string product_name;
        uint256 quantity;
        ShipmentStatus status;
        PaymentStatus pay;
        StakeHolder role;
        uint256 pickuptime;
        uint256 deliverytime;
    }

    Shipment[] public shipments;

    function createShipment( uint256 _index, string memory _product_name, uint256 _quantity, address _sender1) public {
        uint256 count = getShipmentCount();
        if(_index!=count){
            require(_index==count,"Please choose the correct index!");
        }

        shipments.push(Shipment("","",_sender1,0x0000000000000000000000000000000000000000,_index,_product_name,_quantity,ShipmentStatus.PENDING,PaymentStatus.UNPAID,StakeHolder.MANUFACTURER,0,0));
    }

    function startShipment(string memory _sender_name, string memory _receiver_name, address _sender, address _receiver, uint256 _index, uint8 _role, uint8 _pay, uint256 _delivery) public{
        Shipment storage new_shipment = shipments[_index];
        if(new_shipment.status==ShipmentStatus.IN_TRANSIT){
            require(new_shipment.status==ShipmentStatus.PENDING,"Shipment already Started!");
        }
        if(new_shipment.status == ShipmentStatus.DELIVERED)
        {
            new_shipment.status = ShipmentStatus.PENDING;
        }
        if(new_shipment.status == ShipmentStatus.PENDING){
            require(new_shipment.status == ShipmentStatus.PENDING, "Shipment Pending or already delivered!");
        }
        uint8 rolee = uint8(new_shipment.role);
        uint8 payy = uint8(new_shipment.pay);
        if(payy == 0){
            payy = _pay;
        }
        require(rolee == _role, "At different stakeholder!!");
        if(rolee==0){
            require(new_shipment.sender==_sender,"Your Address didn't match with the address of created Shipment!");
        }
        new_shipment.sender_name = _sender_name;
        new_shipment.receiver_name = _receiver_name;
        new_shipment.sender = _sender;
        new_shipment.receiver = _receiver;
        new_shipment.status = ShipmentStatus.IN_TRANSIT;
        new_shipment.pickuptime = block.timestamp;
        new_shipment.deliverytime = _delivery;
        
    }

    function completeShipment(uint256 _index,address _rec) public payable{
        Shipment storage new_shipment = shipments[_index];
        require(new_shipment.status == ShipmentStatus.IN_TRANSIT, "Shipment still pending or delivered!");
        require(new_shipment.receiver == _rec,"Your Address didn't match with the address of started Shipment!");

        new_shipment.status = ShipmentStatus.DELIVERED;
        
        if(new_shipment.role == StakeHolder.MANUFACTURER){
            new_shipment.role = StakeHolder.WHOLESALER;

        }
        else if(new_shipment.role == StakeHolder.WHOLESALER){
            new_shipment.role = StakeHolder.RETAILER;
        }
        new_shipment.pay = PaymentStatus.PAID;
    }

    function getShipment(uint256 _index) public view returns (string memory, string memory, address, address, uint256, string memory, uint256, ShipmentStatus, PaymentStatus, StakeHolder,uint256,uint256){
            Shipment storage new_shipment = shipments[_index];
            return (new_shipment.sender_name, new_shipment.receiver_name, new_shipment.sender, new_shipment.receiver, new_shipment.index, new_shipment.product_name, new_shipment.quantity, new_shipment.status, new_shipment.pay, new_shipment.role,new_shipment.pickuptime,new_shipment.deliverytime);

    }

    function getallShipments()public view returns (Shipment[] memory){
        return shipments;
    }

    function getShipmentCount()public view returns (uint256){
        uint256 c = shipments.length;
        return c;
    }

}