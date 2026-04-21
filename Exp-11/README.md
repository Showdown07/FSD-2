# Experiment 11 - Microservices Lab

## Aim

To implement a simple microservices-based application using Flask, where one service manages customer details and another service manages order details. The customer service communicates with the order service through an API call.

## Project Overview

This experiment contains two independent Flask microservices:

1. `customer-service`
2. `order_service`

The `customer-service` stores customer details and fetches the related order details from the order microservice.

The `order_service` stores order data and exposes APIs to fetch orders by customer ID and update order status.

## Folder Structure

```text
Exp-11/
|-- .venv/
|-- micro-services-lab/
|   |-- customer-service/
|   |   |-- customer_app.py
|   |   `-- requirements.txt
|   `-- order_service/
|       |-- app.py
|       `-- requirements.txt
`-- README.md
```

## Technologies Used

- Python
- Flask
- Requests
- REST API
- Render for deployment

## Services and Ports

- Customer Service: `http://127.0.0.1:5001`
- Order Service: `http://127.0.0.1:5002`

## Deployed Customer Service

- Customer service Render link:
  [https://exp-11-customer.onrender.com](https://exp-11-customer.onrender.com)

- Order service Render link:
  [https://fsd-2-1-rkn0.onrender.com/](https://fsd-2-1-rkn0.onrender.com/)

## Installation

Open PowerShell and run:

```powershell
cd "D:\Theory\FS1\FSD-2\Exp-11"
.\.venv\Scripts\Activate.ps1
pip install -r ".\micro-services-lab\customer-service\requirements.txt"
```

Note: Both services currently use the same dependency list, so installing from one `requirements.txt` is enough in the same virtual environment.

## How To Run The Experiment

Open two PowerShell terminals.

### Terminal 1: Run Order Service

```powershell
cd "D:\Theory\FS1\FSD-2\Exp-11"
.\.venv\Scripts\Activate.ps1
python ".\micro-services-lab\order_service\app.py"
```

### Terminal 2: Run Customer Service

```powershell
cd "D:\Theory\FS1\FSD-2\Exp-11"
.\.venv\Scripts\Activate.ps1
python ".\micro-services-lab\customer-service\customer_app.py"
```

## Available Endpoints

### Order Service

- `GET /`
- `GET /orders/user/<user_id>`
- `PUT /orders/<order_id>/status`

Examples:

- `http://127.0.0.1:5002/`
- `http://127.0.0.1:5002/orders/user/101`

### Customer Service

- `GET /`
- `GET /customers/<user_id>/orders`

Examples:

- `http://127.0.0.1:5001/`
- `http://127.0.0.1:5001/customers/101/orders`

## How Communication Happens

1. A request is sent to the customer service.
2. The customer service checks whether the customer exists.
3. It calls the order service API to fetch order data for that customer.
4. Both customer details and order details are combined into a single JSON response.

### Order Service Home

```json
{
  "service": "Order Service Running"
}
```

### Customer Service Home

```json
{
  "service": "Customer Service Running"
}
```

## Conclusion

This experiment demonstrates the basic working of microservices using Flask. The customer service and order service are separated into independent modules, and communication between them happens through REST API calls. This improves modularity, scalability, and maintainability.
