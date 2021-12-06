

  select "firstName" as "First Name",
         "lastName" as "Last Name",
    sum ("amount") as "Total amount spent"
    from "customers"
    join "payments" using ("customerId")
group by "firstName",
         "lastName"
order by "Total amount spent" DESC
