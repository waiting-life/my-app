import { useEffect, useState } from 'react'
import { AutoComplete, Button, Checkbox, Form, Input, InputNumber, Radio, Select, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select

type LayoutType = Parameters<typeof Form>[0]['layout'];
type SizeType = Parameters<typeof Form>[0]['size'];
type ValidateStatus = Parameters<typeof Form.Item>[0]['validateStatus'];

export const FormCom = () => {
  const [form] = Form.useForm()
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical')
  const [size, setSize] = useState<SizeType | 'default'>('default')
  const [curJobOptions, setCurJobOptions] = useState<any[]>([])
  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);
  const [number, setNumber] = useState<{ 
    value: number; 
    validateStatus?: ValidateStatus, 
    errorMsg?: string | null}>({
    value: 11
  })

  const formItemLayout = formLayout === 'horizontal' ? { labelCol: { span: 8 }, wrapperCol: { span: 16 } } : null
  const buttonLayout = formLayout === 'horizontal' ? { wrapperCol: { offset: 8, wrapper: 16 } } : null
  const style = formLayout === 'inline' ? {} : { style: { width: 400 } }

  const departments = [
    { label: '开发部门', value: 'development'},
    { label: '管理本部门', value: 'management'}
  ]

  const jobs = {
    development: [{ label: '前端工程师', value: 'front' }, { label: '后端工程师', value: 'back'}],
    management: [{ label: 'hr', value: 'hr' }, { label: '运营管理', value: 'operating'}]
  }

  // const layout = {
  //   labelCol: { span: 8},
  //   wrapperCol: { span: 16}
  // }

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = (values: any) => {
    console.log(values)
  }
  const onReset = () => {
    form.resetFields()
  }
  const onFill = () => {
    form.setFieldsValue({ username: 'www', password: 666666, remember: true })
  }
  const onFormLayoutChange = ({layout, size}: {layout: LayoutType, size: SizeType}) => {
    setFormLayout(layout)
    setSize(size)
  }
  const onDeparentmentChange = (value: keyof typeof jobs) => {
    setCurJobOptions(jobs[value])
  }
  const onWebsiteChange = (value: string) => {
    if(!value) {
      setAutoCompleteResult([])
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`))
    }
  }
  const websiteOptions = autoCompleteResult.map(website => ({ label: website, value: website }))

  const validatePrimeNumber = (number: number): {
    validateStatus: ValidateStatus;
    errorMsg: string | null;
  }  => {
    if (number === 11) {
      return {
        validateStatus: 'success',
        errorMsg: null,
      };
    }
    return {
      validateStatus: 'error',
      errorMsg: 'The prime between 8 and 12 is 11!',
    };
  }
  const tips =
    'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';
  const onNumberChange = (value: number)  => {
    setNumber({...validatePrimeNumber(value), value})
  }

  useEffect(() => {
    form.setFieldsValue({username: 'www', password: 666666, remember: true})
  }, [])

  return (
    <Form 
      name="basic"
      // labelCol={{span: 8}}
      // wrapperCol={{span: 16}}
      {...style}
      {...formItemLayout}
      onFinish = {onFinish}
      // 'horizontal'
      layout={formLayout}
      labelWrap
      onValuesChange={onFormLayoutChange}
      form={form}
      size={size as SizeType}
      validateMessages={validateMessages}
      >
      <Form.Item name="layout" label="Form Layout">
        <Radio.Group value={formLayout}>
          <Radio.Button value="vertical">vertical</Radio.Button>
          <Radio.Button value="horizontal">horizontal</Radio.Button>
          <Radio.Button value="inline">inline</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="表单尺寸" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="username" label="用户名" rules={[{ required: true, message: '请输入用户名' }]} >
          <Input placeholder='请输入用户名'/>
      </Form.Item>
      <Form.Item name="password" label="密码" rules={[{ required: true, message: '请输入密码!' }]}>
          <Input.Password placeholder='请输入密码'/>
      </Form.Item>
      <Form.Item name="confirm" label="确认密码" rules={[{required: true}, ({getFieldValue}) => {
        return {
          validator(_, value) {
            if(!value || getFieldValue('password') !== value) {
              return Promise.resolve()
            }
            return Promise.reject(new Error('两次的密码不匹配'))
          }
        }
      }]} dependencies={['password']}>
        <Input.Password/>
      </Form.Item>
      <Form.Item name="phone" label="电话号码" rules={[{required: true}]}>
        <InputNumber addonBefore={prefixSelector}/>
      </Form.Item>
      <Form.Item
        name="donation"
        label="Donation"
        rules={[{ required: true, message: 'Please input donation amount!' }]}
      >
        <InputNumber addonAfter={suffixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item name="website" label="website" rules={[{required: true}]}>
        <AutoComplete options={websiteOptions} onChange = {onWebsiteChange} placeholder="website">
          <Input/>
        </AutoComplete>
      </Form.Item>
      <Form.Item 
        label="Prime between 8 & 12"
        validateStatus={number.validateStatus}
        help={number.errorMsg || tips}>
        <InputNumber value={number.value} min={8} max={12} onChange={onNumberChange}/>
      </Form.Item>
      <Form.Item name="remember" {...buttonLayout} valuePropName="checked">
        <Checkbox>记住我</Checkbox>
      </Form.Item>
      <Form.Item label="学习感想学习感想学习感想学习感想" name="info" rules={[{ required: true, message: '请输入学习感想' }]}>
        <Input />
      </Form.Item>
      <Form.List name="names" rules={[
        {
          validator: async (_, names) => {
            console.log(names)
            if(!names || names.length < 2) {
              return Promise.reject(new Error('至少两个乘客'))
            }
          }
        }
      ]}>
        {(fields, {add, remove}, {errors}) => (
          <>
          {fields.map((field, index) => {
            // console.log(fields, field, '????')
            return (
              <Form.Item key={field.key}>
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']} 
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "请输入乘客姓名或者删除这个field",
                    },
                  ]}
                  noStyle
                >
                  <Input placeholder='请输入乘客姓名' style={{ width: '60%' }} />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            )
          })}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              style={{ width: '60%' }}
              icon={<PlusOutlined />}
            >
              添加 field
            </Button>
            <Button
              type="dashed"
              onClick={() => {
                add('The head item', 0);
              }}
              style={{ width: '60%', marginTop: '20px' }}
              icon={<PlusOutlined />}
            >
              在头部添加field
            </Button>
            <Form.ErrorList errors={errors} />
          </Form.Item>
          </>
        )
        }
      </Form.List>
      {/* 嵌套表单字段需要对 field 进行拓展，将 field.name 应用于控制字段。 */}
      <Form.List name="users" >
        {(fields,{add, remove}, errors ) => (
          <>
            {fields.map(({key, name, ...restField}) => (
              <Space key={key} style={{display: 'flex', marginBottom: 8}} align="baseline">
                <Form.Item {...restField} name={[name, 'first']} rules={[{ required: true, message: '请输入first name' }]}>
                  <Input placeholder='请输入first name'/>
                </Form.Item>
                <Form.Item {...restField} name={[name, 'last']} rules={[{ required: true, message: '请输入last name' }]}>
                  <Input placeholder='请输入last name'/>
                </Form.Item>
              </Space>
            ))}
            <Form.Item>
              <Button onClick={() => add()} type="dashed" style={{ width: '60%' }} icon={<PlusOutlined />}>
                添加field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      {/* 一个表单中包含多个表单控件的情况。 */}
      <Form.Item name="department" label="选择部门">
        <Select options={departments} onChange={onDeparentmentChange} placeholder="请选择部门"/>
      </Form.Item>
      <Form.List name="employees">
         {(fields, {add, remove}, errors) => (
           <>
              {fields.map(({key, name, ...restField}) => (
                <Space key={key} align="baseline">
                  <Form.Item 
                    noStyle 
                    shouldUpdate={(prevValues, curValues) =>{
                      console.log(prevValues, curValues)
                      return prevValues.development !== curValues.development || prevValues.job !== curValues.job
                    }
                    }
                    >
                    {() => (
                      <Form.Item {...restField} name={[name, 'job']} label="请选择职位">
                        <Select placeholder="请选择职位" options={curJobOptions}>
                          {/* {(jobs[form.getFieldValue('department') as keyof typeof jobs] || []).map(item => (
                            <Option key={item.name} value={item.name}>
                              {item.label}
                            </Option>
                          ))} */}
                        </Select>
                      </Form.Item>
                    )}
                  </Form.Item>
                  <Form.Item {...restField} name={[name, 'username']} label="请输入姓名">
                    <Input placeholder="请输入姓名" />
                  </Form.Item>
                </Space>
              ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add sights
              </Button>
            </Form.Item>
           </>
         )}
      </Form.List>
      <Form.Item name={['user', 'name']} label="姓名" rules={[{ required: true}]}>
        <Input/>
      </Form.Item>
      <Form.Item name={['user', 'age']} label="年龄" rules={[{type: 'number',min: 0, max: 99 }]}>
        <Input/>
      </Form.Item>
      <Form.Item name={['user', 'email']} label="邮件" rules={[{type: 'email'}]}>
        <Input/>
      </Form.Item>
      <Form.Item name={['user', 'website']} label="website">
        <Input/>
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="自我介绍">
        <Input.TextArea/>
      </Form.Item>
      <Form.Item {...buttonLayout}>
        <Button type="primary" htmlType='submit'>提交</Button>
        <Button htmlType="button" onClick={onReset}>重置</Button>
        <Button htmlType='button' onClick={onFill}>回显</Button>
      </Form.Item>
    </Form>
  )
}
