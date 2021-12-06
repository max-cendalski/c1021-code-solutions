  select "amount",
         "firstName" as "firstName",
         "lastName" as "lastName"
   from  "payments"
    join "customers" using ("customerId")
  order by "amount" DESC
  limit 10;
