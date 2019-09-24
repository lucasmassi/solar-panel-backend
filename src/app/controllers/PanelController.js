import Panel from '../models/Panel';
import User from '../models/User';

class PanelController {
  async index(req, res) {
    const user = await User.findByPk(req.userId);

    const panels = await Panel.findAll({
      where: { state: user.state },
      order: ['installation_date'],
      attributes: [
        'id',
        'installation_date',
        'system_size',
        'zip_code',
        'state',
        'cost',
        'formatted_installation',
      ],
    });

    return res.json(panels);
  }

  async sumTotal(req, res) {
    const { state } = await User.findByPk(req.userId);

    const panelsSum = await Panel.sum('system_size', { where: { state } }).then(
      sum => {
        return sum;
      }
    );

    return res.json(panelsSum);
  }

  async maxCost(req, res) {
    const { state } = await User.findByPk(req.userId);

    const maxCost = await Panel.max('cost', {
      where: { state },
    });

    const { zip_code } = await Panel.findOne({
      where: { state, cost: maxCost },
      attributes: ['zip_code'],
    });

    return res.json({
      maxCost,
      zip_code,
    });
  }
}

export default new PanelController();
