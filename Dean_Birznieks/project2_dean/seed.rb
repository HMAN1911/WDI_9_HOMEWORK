# file to enable populating of database without input forms
require_relative 'db_config'
require_relative 'models/diagram'
# require_relative 'models/diagram_type'
require_relative 'models/user'

User.create({
  username: 'test@gmail.com',
  password: 'test'
})

User.create({
  username: 'another@gmail.com',
  password: 'test'
})

Diagram.create({
  diagram_type: 'Market Strategy',
  user_id: 1, # change this if user already exists
  username: 'test@gmail.com',
  diagram_name: 'The Ansoff Product / Market Expansion Grid',
  diagram_oview_title: 'Notes',
  diagram_oview_text: "The Ansoff Matrix was developed by H. Igor Ansoff and first published in the Harvard Business Review in 1957, in an article titled 'Strategies for Diversification'. It has given generations of marketers and business leaders a quick and simple way to think about the risks of growth. It shows four strategies you can use to grow. It also helps you analyze the risks associated with each one. The idea is that, each time you move into a new quadrant (horizontally or vertically), risk increases.",
  axis_label_bottom: 'Markets',
  axis_label_left: 'Products',
  q1_label_side: 'New',
  q1_label_corner: '_', # not used
  q1_content: 'Product Development',
  q2_label_side: '', # not used
  q2_content: 'Diversification',
  q3_label_side: 'Existing', # not used
  q3_label_bottom: 'Existing',
  q3_label_corner: '_', # not used
  q3_content: 'Market Penetration',
  q4_label_bottom: 'New',
  q4_label_corner: '', # not used
  q4_content: 'Market Development'
})

Diagram.create({
  diagram_type: 'Organisational Strategy',
  user_id: 1, # change this if user already exists
  username: 'test@gmail.com',
  diagram_name: 'The Outsourcing Decision Matrix',
  diagram_oview_title: 'Notes',
  diagram_oview_text: 'This matrix helps you consider two important factors re a any decison to outsource a task or not. <br>
  The first is how strategically important the function is to your business - is it part of your competitive advantage and the second factor relates to the impact on your organisations operational (and related cost and quality) performance.',
  axis_label_bottom: 'Contribution to Operational Performance',
  axis_label_left: 'Strategic Importance',
  q1_label_side: 'High',
  q1_label_corner: '', # not used
  q1_content: 'Partner for it',
  q2_label_side: '', # not used
  q2_content: 'Retain it internal',
  q3_label_side: 'Low', # not used
  q3_label_bottom: 'Low',
  q3_label_corner: '', # not used
  q3_content: 'Eliminate it',
  q4_label_bottom: 'High',
  q4_label_corner: '', # not used
  q4_content: 'Outsource it'
})
