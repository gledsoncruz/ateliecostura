module CustomHelpers

  def display_available
     data.products.select{|product| product.available?}
  end

  def count_products
  	data.products.select{|product| product.available?}.count
  end

end