const db = require('../../../database/models');
const { Merchant, User } = db;

const createMerchant = async ({ user_id, business_name, average_rating, status}) => {
  try {
    const user = await User.findByPk(user_id);
    if (!user) throw new Error('User not found');

    const merchant = await Merchant.create({
      user_id,
      business_name,
      average_rating,
      status
    });

    return merchant;
  } catch (error) {
    throw error;
  }
};

const getAllMerchants = async () => {
  try {
    console.log('Models available:', Object.keys(db));

    const Merchants = await Merchant.findAll({
      logging: console.log // TODO: Delete in production mode
    });

    console.log('Merchants found:', Merchants ? Merchants.length : 0);
    return Merchants || [];
  } catch (error) {
    console.error('Error in getAllMerchants:', error);
    throw error;
  }
};

const updateMerchant = async (id, updateData) => {
  try {
    const merchant = await Merchant.findByPk(id);
    if (!merchant) throw new Error('Merchant not found');

    if (updateData.business_name) merchant.business_name = updateData.business_name;
    if (updateData.average_rating) merchant.average_rating = updateData.average_rating;
    if (updateData.status) merchant.status = updateData.status;

    await merchant.save();
    return merchant;
  } catch (error) {
    throw error;
  }
};

const getMerchantByMerchantId = async (id ) => {
  try {
    const merchant = await Merchant.findOne({
    where: { id }
    });

    if (!merchant) throw new Error('Merchant not found');
    return merchant;
  } catch (error) {
    throw error;
  }
};

const deleteMerchant = async (id) => {
  try {
    const merchant = await Merchant.findByPk(id);
    if (!merchant) throw new Error('Merchant not found');
    await merchant.destroy();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createMerchant,
  getAllMerchants,
  updateMerchant,
  getMerchantByMerchantId,
  deleteMerchant
};
