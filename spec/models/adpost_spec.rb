require 'rails_helper'

# Test suite for the Adpost model
RSpec.describe Adpost, type: :model do
  # Association test
  # ensure an item record belongs to a single todo record
  it { should belong_to(:user) }
  it { should belong_to(:category) }
  # Validation test
  # ensure column name is present before saving
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:price) }
end
